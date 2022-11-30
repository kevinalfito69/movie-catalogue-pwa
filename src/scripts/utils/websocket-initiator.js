import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  async init(url) {
    const websocket = new WebSocket(url);
    websocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler(message) {
    const movies = JSON.parse(message.data);
    console.log(movies.title, movies.overview);
    NotificationHelper.sendNotification({
      title: `${movies.title} is on cinema!`,
      options: {
        body: movies.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movies.poster_path}`,
      },
    });
  },
};
export default WebSocketInitiator;
