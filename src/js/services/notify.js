import { Notify } from 'notiflix/build/notiflix-notify-aio';

function apiNotifySucces() {
    Notify.success('Peace at home, peace in the world.', {
        ID: 'MKA',
        timeout: 1923,
        showOnlyTheLastOne: true,
    });
}

export default { apiNotifySucces };