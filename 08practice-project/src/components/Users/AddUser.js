import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const addUserHndler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHndler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
