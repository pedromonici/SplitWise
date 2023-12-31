DROP TABLE IF EXISTS user_account CASCADE;
DROP TABLE IF EXISTS users_group CASCADE;
DROP TABLE IF EXISTS expense CASCADE;
DROP TABLE IF EXISTS user_in_group CASCADE;
DROP TABLE IF EXISTS user_dues CASCADE;
DROP TABLE IF EXISTS user_connections CASCADE;

CREATE TABLE user_account (
    username      VARCHAR(255),
	email         VARCHAR(255) NOT NULL,
    password      VARCHAR(255) NOT NULL,
	name          VARCHAR(255) NOT NULL,
	surname       VARCHAR(255) NOT NULL,
	phone         VARCHAR(255) NOT NULL,
	register_date TIMESTAMP WITH TIME ZONE NOT NULL,

	CONSTRAINT pk_user PRIMARY KEY (username)
);

CREATE TABLE users_group (
	id              VARCHAR(255),
	owner           VARCHAR(255) NOT NULL,
	name            VARCHAR(255) NOT NULL,
	creation_date   TIMESTAMP WITH TIME ZONE NOT NULL,

	CONSTRAINT pk_group PRIMARY KEY (id),
	CONSTRAINT sk_group UNIQUE (owner, name, creation_date),
	CONSTRAINT fk_group FOREIGN KEY (owner) REFERENCES user_account(username) ON DELETE CASCADE
);

CREATE TABLE expense (
	id          VARCHAR(255),
	payee       VARCHAR(255),
	amount      REAL NOT NULL,
	pay_date    TIMESTAMP WITH TIME ZONE,
	description VARCHAR(255),
	title       VARCHAR(255) NOT NULL,
	group_id    VARCHAR(255) NOT NULL,

	CONSTRAINT pk_expense PRIMARY KEY (id),
	CONSTRAINT sk_expense UNIQUE (payee, group_id, pay_date),
	CONSTRAINT fk_user FOREIGN KEY (payee) REFERENCES user_account(username) ON DELETE CASCADE,
	CONSTRAINT fk_group FOREIGN KEY (group_id) REFERENCES users_group(id) ON DELETE CASCADE
);

CREATE TABLE user_in_group (
	username    VARCHAR(255),
	group_id    VARCHAR(255),

	CONSTRAINT pk_user_in_group PRIMARY KEY (username, group_id),
	CONSTRAINT fk_user FOREIGN KEY (username) REFERENCES user_account(username) ON DELETE CASCADE,
	CONSTRAINT fk_group FOREIGN KEY (group_id) REFERENCES users_group(id) ON DELETE CASCADE
);

CREATE TABLE user_dues (
	username   VARCHAR(255),
	expense_id VARCHAR(255),
	amount     REAL,
	is_payed   BOOLEAN,

	CONSTRAINT pk_user_dues PRIMARY KEY (username, expense_id),
	CONSTRAINT fk_user FOREIGN KEY (username) REFERENCES user_account(username) ON DELETE CASCADE,
	CONSTRAINT fk_expense FOREIGN KEY (expense_id) REFERENCES expense(id) ON DELETE CASCADE
);

CREATE TABLE user_connections (
	username1 VARCHAR(255),
	username2 VARCHAR(255),

	CONSTRAINT pk_user_connections PRIMARY KEY (username1, username2),
	CONSTRAINT fk_user_1 FOREIGN KEY (username1) REFERENCES user_account(username) ON DELETE CASCADE,
	CONSTRAINT fk_user_2 FOREIGN KEY (username2) REFERENCES user_account(username) ON DELETE CASCADE
);
