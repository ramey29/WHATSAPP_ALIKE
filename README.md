# smallapp

## Project setup
npm install 

## install vue-cli globally
npm install -g @vue/cli 

### Compiles and hot-reloads for development
npm run serve

### Compiles and minifies for production (will create a 'dist' folder and this folder can be deployed on prod)
npm run build

### Run your tests
npm run test [no tests written]

### Lints and fixes files
npm run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### ASSSUMPTIONS MADE

to make the app running and to see hoe the message are being sent and received, one can run the app in two instances

so in one tab say run http://localhost:8080/#/name=deepak
and another tab say run http://localhost:8080/#/name=bharat

now you can go to list of friends in bharat and message deepak saying "hi" and then another tab you can see deepak receving message from bharat

any doubt regarding the same one can contact me

havent made chat history api as such so not chat history available 

have made listfriends api in mongodb atlas and it connects there to list friends

searching of friends in done in FE only


