# Personal Portfolio

## Description

React application integrated with ​github.com​ API. It showcases my public github projects. You can also use a good, old outlook to contact me via email. If you need my CV, it's also there :)

## Development

To start the project, in the root project directory run:

1. `npm install`
2. `npm start`

To run the containerized version of the app, run:

for development:
`docker-compose up`

then navigate to [http://localhost:3000/](http://localhost:3000/)

### Storybook

To launch the storybook on port 9009 in dev-mode run:

1. `npm run storybook`

You can develop your components and write stories and see the changes in Storybook immediately

## Production

for production:

1. `docker build -t personal-portfolio .`
2. `docker run -p 80:80 personal-portfolio:latest`

and navigate to [http://127.0.0.1/](http://127.0.0.1/)
