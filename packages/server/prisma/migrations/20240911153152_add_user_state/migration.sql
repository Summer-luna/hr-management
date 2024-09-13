-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_state_id" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "UserState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserState_name_key" ON "UserState"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_user_state_id_fkey" FOREIGN KEY ("user_state_id") REFERENCES "UserState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
