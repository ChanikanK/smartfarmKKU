
FROM nginx:1.13.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/smartfarm02 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
