FROM fusuf/whatsasena:latest

RUN git clone https://github.com/DARKCRIME1/turi /root/turi
WORKDIR /root/turi/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
