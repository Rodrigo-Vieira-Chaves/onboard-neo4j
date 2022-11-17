import { handlerFor } from '@node-ts/bus-core';
import { HelloWorldCommand } from './hello-world-command';
import fetch from 'node-fetch';

export const helloWorldHandler = handlerFor(HelloWorldCommand, async (command) => {
  try {
    // const login = await axiosConn.post('/users/login', { login_id: 'rodrigochaves', password: 'Tr3buch3t1@' });
    // const token = login.headers.token;
    // console.log(login.data);

    const personalAccessToken = '5jp3yhkz6t83ix6m65tcg9zncr';
    const authHeader = `Bearer ${personalAccessToken}`;
    const baseURL = 'http://localhost:8065/api/v4';

    // const response = await fetch(
    //   `${baseURL}/users/stats/filtered?in_team=4wz81jjtrpyktqt9fd638t1bdo&include_deleted=false&include_bots=false`,
    //   { headers: { Authorization: authHeader } },
    // );
    // const total = await response.json();
    // console.log(total);

    let response = await fetch(`${baseURL}/users?in_team=4wz81jjtrpyktqt9fd638t1bdo&active=true&page=0&per_page=2`, {
      headers: { Authorization: authHeader },
    });
    const users = await response.json();
    console.log(users);

    response = await fetch(`${baseURL}/users?in_team=4wz81jjtrpyktqt9fd638t1bdo&active=true&page=2&per_page=2`, {
      headers: { Authorization: authHeader },
    });
    const users2 = await response.json();
    console.log(users2);
    // const users = await axiosConn.post('/users/usernames', ['feedback-taqtile-bot', 'rodrigochaves']);
    // // console.log(users.data);

    // const directChannel = await axiosConn.post('/channels/direct', [users.data[0].id, users.data[1].id]);
    // // console.log(directChannel.data);

    // const post = await axiosConn.post('/posts', {
    //   channel_id: directChannel.data.id,
    //   message: 'Hello, this is a testing post',
    //   props: {
    //     attachments: [
    //       {
    //         text: 'Hello, time for your feedback!',
    //         actions: [
    //           {
    //             id: 'FeedbackRequest',
    //             name: 'Request Feedback',
    //             integration: {
    //               url: 'https://82fb-179-253-169-177.sa.ngrok.io/helloworld',
    //               context: {
    //                 action: 'do_something_ephemeral',
    //               },
    //             },
    //           },
    //           {
    //             id: 'update',
    //             name: 'Update',
    //             integration: {
    //               url: 'https://82fb-179-253-169-177.sa.ngrok.io/helloworld',
    //               context: {
    //                 action: 'do_something_update',
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // });

    // console.log(post.data);
  } catch (error) {
    console.log(error);
  }
});
