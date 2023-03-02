FROM nginx:stable

COPY build /usr/share/nginx/html 

COPY nginx.conf /etc/nginx/conf.d/default.conf
# VOLUME [ "/usr/share/nginx/html" ]

# CMD [ "nginx", "-g", "deamon off;" ]
