# Stage 1
FROM node:10 as react-build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn install

COPY . .
RUN yarn run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]