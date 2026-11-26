FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --chown=node:node server.mjs package.json ./
COPY --chown=node:node dist ./dist
USER node
EXPOSE 3000
CMD ["node", "server.mjs"]
