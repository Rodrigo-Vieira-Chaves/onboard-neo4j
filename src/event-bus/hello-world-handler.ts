import fetch from 'node-fetch';
import { handlerFor } from '@node-ts/bus-core';
import { HelloWorldCommand } from './hello-world-command';

export const helloWorldHandler = handlerFor(HelloWorldCommand, async (command) => {
  try {
    const personalAccessToken = 'tkwkaga48t86unns3py3pfts4h';
    const authHeader = `Bearer ${personalAccessToken}`;
    const baseURL = 'http://localhost:8065/api/v4';

    const response = await fetch(`${baseURL}/channels/direct`, {
      method: 'post',
      headers: { Authorization: authHeader },
      body: JSON.stringify(['8dtubnafpffuje6ywczxogj8xh', 'rt6xmrinibd43ji46uxoao3r4w']),
    });
    const directChannelId = (await response.json()).id;

    const response2 = await fetch(`${baseURL}/posts`, {
      method: 'post',
      headers: { Authorization: authHeader },
      body: JSON.stringify({
        channel_id: directChannelId,
        message: 'Testing PoC',
        props: {
          attachments: [
            {
              actions: [
                {
                  id: 'user1',
                  name: 'Select an User',
                  integration: {
                    url: 'https://44e7-200-101-26-87.sa.ngrok.io/helloworld',
                    context: {
                      action: 'ThisIsActionOfUser1',
                    },
                  },
                  type: 'select',
                  data_source: 'users',
                },
                {
                  id: 'user2',
                  name: 'Select an User',
                  integration: {
                    url: 'https://44e7-200-101-26-87.sa.ngrok.io/helloworld',
                    context: {
                      action: 'ThisIsActionOfUser2',
                    },
                  },
                  type: 'select',
                  data_source: 'users',
                },
              ],
            },
          ],
        },
      }),
    });

    return {
      update: {
        message: 'Updated!',
        props: {},
      },
      ephemeral_text: 'You Updated the post!',
    } as any;
  } catch (error) {
    console.log(error);
  }
});
