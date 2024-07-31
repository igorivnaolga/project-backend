import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'igorivna',
  database: 'my_movies_uqaa',
  password: 'dB2VDjIkaqbiQODj2pl6KXXuYi0RYuD4',
  host: 'dpg-cqlb3h9u0jms7389keeg-a.singapore-postgres.render.com',
  port: '5432',
  dialectOptions: {
    ssl: true,
  },
});

export default sequelize;
