CREATE TABLE "users" (
  "id" varchar PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "display_name" varchar,
  "provider" varchar,
  "created_at" timestamp
);

CREATE TABLE "cats" (
  "id" varchar PRIMARY KEY,
  "name" varchar,
  "rarity" varchar,
  "personality" varchar,
  "required" varchar,
  "points" int,
  "bonus_tags" varchar
);

CREATE TABLE "items" (
  "id" varchar PRIMARY KEY,
  "kind" varchar,
  "name" varchar,
  "tags" varchar,
  "durability" int
);

CREATE TABLE "perks" (
  "id" varchar PRIMARY KEY,
  "name" varchar,
  "cost" varchar,
  "effect_type" varchar,
  "effect_args" varchar
);

CREATE TABLE "locations" (
  "id" varchar PRIMARY KEY,
  "type" varchar,
  "base_reward" varchar
);

CREATE TABLE "games" (
  "id" varchar PRIMARY KEY,
  "code" varchar UNIQUE NOT NULL,
  "status" varchar,
  "round" int,
  "active_player_idx" int,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "game_trail" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "round" int,
  "order_idx" int,
  "location_id" varchar,
  "mood_token" varchar
);

CREATE TABLE "game_market_cats" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "slot" int,
  "cat_id" varchar NOT NULL
);

CREATE TABLE "game_market_perks" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "slot" int,
  "perk_id" varchar NOT NULL
);

CREATE TABLE "game_market_shop" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "item_id" varchar NOT NULL,
  "stock" int
);

CREATE TABLE "game_players" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "user_id" varchar,
  "name" varchar,
  "position" int,
  "score_temp" int
);

CREATE TABLE "player_inventory" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "player_id" varchar NOT NULL,
  "item_id" varchar NOT NULL,
  "qty" int
);

CREATE TABLE "player_cats" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "player_id" varchar NOT NULL,
  "cat_id" varchar NOT NULL
);

CREATE TABLE "player_photos" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "player_id" varchar NOT NULL,
  "points" int,
  "created_at" timestamp
);

CREATE TABLE "action_logs" (
  "id" varchar PRIMARY KEY,
  "game_id" varchar NOT NULL,
  "player_id" varchar,
  "turn" int,
  "type" varchar,
  "payload" varchar,
  "created_at" timestamp
);

ALTER TABLE "game_trail" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "game_trail" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id");

ALTER TABLE "game_market_cats" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "game_market_cats" ADD FOREIGN KEY ("cat_id") REFERENCES "cats" ("id");

ALTER TABLE "game_market_perks" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "game_market_perks" ADD FOREIGN KEY ("perk_id") REFERENCES "perks" ("id");

ALTER TABLE "game_market_shop" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "game_market_shop" ADD FOREIGN KEY ("item_id") REFERENCES "items" ("id");

ALTER TABLE "game_players" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "game_players" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "player_inventory" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "player_inventory" ADD FOREIGN KEY ("player_id") REFERENCES "game_players" ("id");

ALTER TABLE "player_inventory" ADD FOREIGN KEY ("item_id") REFERENCES "items" ("id");

ALTER TABLE "player_cats" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "player_cats" ADD FOREIGN KEY ("player_id") REFERENCES "game_players" ("id");

ALTER TABLE "player_cats" ADD FOREIGN KEY ("cat_id") REFERENCES "cats" ("id");

ALTER TABLE "player_photos" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "player_photos" ADD FOREIGN KEY ("player_id") REFERENCES "game_players" ("id");

ALTER TABLE "action_logs" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "action_logs" ADD FOREIGN KEY ("player_id") REFERENCES "game_players" ("id");
