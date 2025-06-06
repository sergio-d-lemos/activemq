/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.apache.activemq.usecases;

import java.util.concurrent.TimeUnit;
import jakarta.jms.JMSException;
import jakarta.jms.Message;
import jakarta.jms.MessageProducer;
import jakarta.jms.Session;
import jakarta.jms.TextMessage;
import jakarta.jms.Topic;
import jakarta.jms.TopicConnection;
import jakarta.jms.TopicSession;
import jakarta.jms.TopicSubscriber;
import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.activemq.broker.BrokerService;
import org.apache.activemq.broker.region.policy.PolicyEntry;
import org.apache.activemq.broker.region.policy.PolicyMap;
import org.apache.activemq.command.ActiveMQTopic;
import org.apache.activemq.util.Wait;
import org.apache.commons.lang.RandomStringUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class DurableSubscriptionHangTestCase {
    private static final Logger LOG = LoggerFactory.getLogger(DurableSubscriptionHangTestCase.class);
    final static String brokerName = "DurableSubscriptionHangTestCase";
    final static String clientID = "myId";
    private static final String topicName = "myTopic";
    private static final String durableSubName = "mySub";
    BrokerService brokerService;

    @Before
    public void startBroker() throws Exception {
        brokerService = new BrokerService();
        brokerService.setDeleteAllMessagesOnStartup(true);
        brokerService.setBrokerName(brokerName);
        PolicyMap policyMap = new PolicyMap();
        PolicyEntry defaultEntry = new PolicyEntry();
        defaultEntry.setExpireMessagesPeriod(1000);
        policyMap.setDefaultEntry(defaultEntry);
        brokerService.setDestinationPolicy(policyMap);
        brokerService.start();
    }

    @After
    public void brokerStop() throws Exception {
        brokerService.stop();
    }

	@Test
	public void testHanging() throws Exception {
		registerDurableSubscription();
		produceExpiredAndOneNonExpiredMessages();
		assertTrue(Wait.waitFor(() -> brokerService.getDestination(new ActiveMQTopic(topicName))
				.getDestinationStatistics().getExpired().getCount() == 1000, 30000, 500));

        Message message = getUnexpiredMessageFromDurableSubscription();
        LOG.info("got message:" + message);
        assertNotNull("Unable to read unexpired message", message);
	}

	private void produceExpiredAndOneNonExpiredMessages() throws JMSException {
		ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("vm://" + brokerName);
        TopicConnection connection = connectionFactory.createTopicConnection();
        TopicSession session = connection.createTopicSession(false, Session.AUTO_ACKNOWLEDGE);
        Topic topic = session.createTopic(topicName);
        MessageProducer producer = session.createProducer(topic);
        producer.setTimeToLive(TimeUnit.SECONDS.toMillis(1));
        for(int i = 0; i < 1000; i++) {
        	sendRandomMessage(session, producer);
        }
        producer.setTimeToLive(TimeUnit.DAYS.toMillis(1));
        sendRandomMessage(session, producer);
        connection.close();
        LOG.info("produceExpiredAndOneNonExpiredMessages done");
	}

	private void registerDurableSubscription() throws JMSException
	{
		ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("vm://" + brokerName);
		TopicConnection connection = connectionFactory.createTopicConnection();
		connection.setClientID(clientID);
		TopicSession topicSession = connection.createTopicSession(false, Session.AUTO_ACKNOWLEDGE);
		Topic topic = topicSession.createTopic(topicName);
		TopicSubscriber durableSubscriber = topicSession.createDurableSubscriber(topic, durableSubName);
		connection.start();
		durableSubscriber.close();
		connection.close();
		LOG.info("Durable Sub Registered");
	}

	private Message getUnexpiredMessageFromDurableSubscription() throws Exception {
		ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("vm://" + brokerName);
		TopicConnection connection = connectionFactory.createTopicConnection();

		connection.setClientID(clientID);
		TopicSession topicSession = connection.createTopicSession(false, Session.AUTO_ACKNOWLEDGE);
		Topic topic = topicSession.createTopic(topicName);
		connection.start();
		TopicSubscriber subscriber = topicSession.createDurableSubscriber(topic, durableSubName);
		LOG.info("About to receive messages");
		Message message = subscriber.receive(1000);
		subscriber.close();
		connection.close();
		LOG.info("collectMessagesFromDurableSubscriptionForOneMinute done");

		return message;
	}

	private void sendRandomMessage(TopicSession session, MessageProducer producer) throws JMSException {
		TextMessage textMessage = session.createTextMessage();
		textMessage.setText(RandomStringUtils.random(500, "abcdefghijklmnopqrstuvwxyz"));
		producer.send(textMessage);
	}
}
