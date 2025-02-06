
const UserStatus = (props) => {
// eslint-disable-next-line react/prop-types
if (props.loggedIn && props.isAdmin){
    return <h1>Welcome Admin</h1>
}
else {
    return <h1>Welcome User</h1>
}
};
export default UserStatus
