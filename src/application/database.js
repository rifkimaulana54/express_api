import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

export const PrismaClient = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'event',
            level: 'error',
        },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
    ],
});

PrismaClient.$on('error', (e) => {
    logger.error(e);
});

PrismaClient.$on('warn', (e) => {
    logger.warn(e);
});

prisma.$on('info', (e) => {
    logger.info(e);
});

prisma.$on('query', (e) => {
    logger.info(e);
});