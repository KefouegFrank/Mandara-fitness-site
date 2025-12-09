/**
 * prisma/seed.ts
 * Database seeding script to create initial admin user and test data
 * Run with: node --loader ts-node/esm prisma/seed.ts
 * Or add to package.json: "prisma:seed": "tsx prisma/seed.ts"
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Create admin user
    const adminEmail = 'admin@mandara-fitness.com';
    const adminPassword = 'Admin123!';

    const existingAdmin = await prisma.user.findUnique({
        where: { email: adminEmail },
    });

    if (existingAdmin) {
        console.log('✅ Admin user already exists');
    } else {
        const hashedPassword = await bcrypt.hash(adminPassword, 10);
        const admin = await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                role: 'ADMIN',
                name: 'Admin User',
            },
        });
        console.log(`✅ Created admin user: ${admin.email}`);
        console.log(`   Password: ${adminPassword}`);
    }

    // Create a test coach (pending approval)
    const coachEmail = 'coach@example.com';
    const coachPassword = 'Coach123!';

    const existingCoach = await prisma.user.findUnique({
        where: { email: coachEmail },
    });

    if (!existingCoach) {
        const hashedPassword = await bcrypt.hash(coachPassword, 10);
        const coach = await prisma.user.create({
            data: {
                email: coachEmail,
                password: hashedPassword,
                role: 'PROSPECT',
                name: 'John Coach',
                coachProfile: {
                    create: {
                        discipline: 'Strength Training',
                        bio: 'Certified strength and conditioning coach with 10+ years experience',
                        portfolio: 'https://johncoach.com',
                        status: 'PENDING',
                    },
                },
            },
            include: {
                coachProfile: true,
            },
        });
        console.log(`✅ Created test coach: ${coach.email}`);
        console.log(`   Password: ${coachPassword}`);
        console.log(`   Status: PENDING (needs admin approval)`);
    } else {
        console.log('✅ Test coach already exists');
    }

    // Create a test client
    const clientEmail = 'client@example.com';
    const clientPassword = 'Client123!';

    const existingClient = await prisma.user.findUnique({
        where: { email: clientEmail },
    });

    if (!existingClient) {
        const hashedPassword = await bcrypt.hash(clientPassword, 10);
        const client = await prisma.user.create({
            data: {
                email: clientEmail,
                password: hashedPassword,
                role: 'PROSPECT',
                name: 'Jane Client',
                clientProfile: {
                    create: {
                        ageRange: '25-34',
                        heightCm: 165,
                        weightKg: 60,
                    },
                },
            },
            include: {
                clientProfile: true,
            },
        });
        console.log(`✅ Created test client: ${client.email}`);
        console.log(`   Password: ${clientPassword}`);
    } else {
        console.log('✅ Test client already exists');
    }

    console.log('\n🎉 Database seeding completed!');
    console.log('\n📝 Test Credentials:');
    console.log('━'.repeat(50));
    console.log('Admin:  admin@mandara-fitness.com / Admin123!');
    console.log('Coach:  coach@example.com / Coach123!');
    console.log('Client: client@example.com / Client123!');
    console.log('━'.repeat(50));
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
