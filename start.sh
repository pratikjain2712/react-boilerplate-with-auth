#!/bin/bash
pwd

pm2 start server --name "ml_frontend" --max-memory-restart 1000M

tail -f /dev/null