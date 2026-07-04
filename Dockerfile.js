FROM n8nio/runners:stable
USER root
RUN cd /opt/runners/task-runner-javascript && \
    pnpm install axios cheerio rss-parser && \
    chown -R runner:runner /opt/runners/task-runner-javascript
COPY n8n-task-runners.json /etc/n8n-task-runners.json
USER runner
CMD ["node"]