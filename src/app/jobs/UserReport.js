export default {
    key: 'UserReport',
    options: {
        delay: 5000,
    },
    async handler({ data }) {

        const { user } = data;
        console.log(user);
    }
}