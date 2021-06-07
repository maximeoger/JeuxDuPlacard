FROM node:14
# RUN yarn install --production

WORKDIR usr/app/

# Copy the compiled source code in workdir
COPY . .


# Install nodeJS dependencies
RUN yarn install --production

# Create a link for common directory
RUN cd common && yarn link

# Grant common directory access to app source code
RUN yarn link common

# Define environement vars
ENV PORT=$PORT \
    ACCESS_TOKEN_SECRET="])=|*e5<{YF1RR*€K&gP)6bBkdjH9}" \
    ACCESS_TOKEN_LIFE=60000 \
    BCRYPT_SALT_ROUND=10 \
    NODE_ENV="staging" \
    ORIGIN_URL="heroku-jdp-front"

# Run the app
CMD node --input-type=module dist/index.js 