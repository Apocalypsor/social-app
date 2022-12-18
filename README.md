# Design
Photo&amp;Video-sharing Social Network APP -  UI &amp; Architecture Design (HW1)

## Wireframes and Prototypes

+ [Figma URL](https://www.figma.com/file/Qc4dCmFpEwgedS060gRwo3/Social-Network-APP?node-id=0%3A1)

## Database

![Database](./assets/Database.png)

## API Documentation

+ [SwaggerHub](https://app.swaggerhub.com/apis/swagger292/Toktik/1.0.0)

# Deploy

## Manually

### Clone
```bash
git clone --recurse-submodules git@github.com:cis557/project-group-x.git
cd project-group-x
```

### Frond End

You can set `REACT_APP_API_ENDPOINT` environment variable to change the backend API URL. The default value is `http://localhost:4000/api`.

```bash
cd frontend
npm install
npm start
```

### Back End

Sample Configuration:

```
BACKEND_PORT=4000
DB_URL=
R2_ACCOUNT_ID=
R2_ACCOUNT_KEY=
R2_ACCOUNT_SECRET=
R2_BUCKET_NAME=
R2_PUBLIC_URL=
```

Save your configuration in the `backend/.env` file. Then execute:

```bash
cd backend
npm install
npm start
```

### Test

Ensure the backend and the frontend are both running, then execute:

```bash
npm test
```

## Docker

Install `docker` first. Save `docker-compose.yaml` in some place:

```yaml
version: "3"

services:
  app:
    image: ghcr.io/apocalypsor/toktiksocial
    container_name: toktiksocial
    ports:
      - "80:80"
    environment:
      - DB_URL=
      - R2_ACCOUNT_ID=
      - R2_ACCOUNT_KEY=
      - R2_ACCOUNT_SECRET=
      - R2_BUCKET_NAME=
      - R2_PUBLIC_URL=
```

Then run:

```bash
docker compose up -d
```
