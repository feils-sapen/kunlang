FROM node:20-alpine
COPY . /mnt/app
WORKDIR /mnt/app
RUN npm install
CMD ["node", "index.js"]
