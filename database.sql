
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "organization_profile" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user"(id),
    "org_name" VARCHAR (100) NOT NULL,
    "org_website" VARCHAR (100) NOT NULL,
    "org_contact_name" VARCHAR (50) NOT NULL,
    "org_contact_email" VARCHAR (50) NOT NULL,
    "org_industry" VARCHAR (50) NOT NULL,
    "org_size" INT NOT NULL
);

CREATE TABLE "opportunity_post" (
    "id" SERIAL PRIMARY KEY,
    "org_id" INT REFERENCES "organization_profile"(id), 
    "opp_title" VARCHAR (50) NOT NULL,
    "closing_date" DATE,
    "opp_type" VARCHAR (50) NOT NULL,
    "industry" VARCHAR (50) NOT NULL,
    "experience_level" VARCHAR (50) NOT NULL,
    "compensation" INT NOT NULL,
    "compensation_per" VARCHAR (15) NOT NULL,
    "opp_details" VARCHAR (2000) NOT NULL,
    "apply-link" VARCHAR (100) NOT NULL
);
