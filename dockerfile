FROM node:latest 
COPY . . 
RUN npm install 
EXPOSE 400
CMD ["nodemon","index.js"] 