FROM postgres

ARG db_name
ARG db_password

ENV POSTGRES_PASSWORD=$db_password
ENV POSTGRES_DB=$db_name
