<p align="center">
 <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1653937118/oneAvatar_bqcg0v.svg" align="center" alt="oneAvatar" />
</p>

# oneAvatar

An api for generating user profile avatars based on the name specified with more customisation

Give as a Star 🌟

## Demo

You can find the live preview [Here](https://shortaurl.xyz/oneavatar)

## Installation

API requires [Node.js](https://nodejs.org/) v14+ to run.

Clone, Install the dependencies and start.

```sh
cd oneAvatar
npm install
npm start or npm run devStart
```

## Usage

### Generating a Profile Avatar

```endpoint
GET /api/v1/?size=256&background=random&bold=true&rounded=true&fullname=ysn4irix
```

**Replacing Query Parameters**

1. size : The size of the avatar either 256 or 512 <br />
2. background : Background color of the avatar either a hex code or your can put random to get random color <br />
3. bold : text can bold or not <br />
4. rounded : avatar can be a circle (True) or a rectangle (false) <br />
5. fullname : fullname of user if there is a space we subtracte first letter of the first word and the last   word otherwise we subtracte the first & second letter <br />

#### Example response

<p align="center">
 <img width="600px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1654095220/nkgerl2uy854bk5a5azf.jpg" align="center" alt="oneAvatar" />
</p>

## License

MIT
