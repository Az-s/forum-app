const mongoose = require('mongoose');
const config = require('./config');
const Comment = require('./models/Comment');
const Post = require('./models/Post');
const User = require('./models/User');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const [user1, user2, user3] = await User.create({
            username: 'John',
            password: '123',
            token: 'BDzBeqP8qZQiuLbONAO78'
        },
        {
            username: 'Brown',
            password: '123',
            token: 'v7lIEcpl_enRPJOVjNBAG'
        },
        {
            username: 'Alan',
            password: '123',
            token: 'R2Hb9XqWnK_cCOyP4Ml85'
        });

    const [post1, post2, post3] = await Post.create(
        {
            user: user1._id,
            title: 'Post #1',
            description: 'Some text',
            image: null
        },
        {
            user: user2._id,
            title: 'Post #2',
            description: 'Some text',
            image: 'faded.webp'
        },
        {
            user: user3._id,
            title: 'Post #3',
            description: 'Some text',
            image: null
        },
    );

    await Comment.create(
        {
            post: post1._id,
            user: user1._id,
            comment: 'some comments1'
        },
        {
            post: post1._id,
            user: user1._id,
            comment: 'some comments2'
        },
        {
            post: post1._id,
            user: user1._id,
            comment: 'some comments3'
        },
        {
            post: post2._id,
            user: user2._id,
            comment: 'some comments4'
        },
        {
            post: post2._id,
            user: user2._id,
            comment: 'some comments5'
        },
        {
            post: post2._id,
            user: user2._id,
            comment: 'some comments6'
        },
        {
            post: post3._id,
            user: user3._id,
            comment: 'some comments7'
        },
        {
            post: post3._id,
            user: user3._id,
            comment: 'some comments8'
        },
        {
            post: post3._id,
            user: user3._id,
            comment: 'some comments9'
        },
    );


    return connection.close();
};

run().catch(error => {
    console.error('Something went wrong!', error);
});