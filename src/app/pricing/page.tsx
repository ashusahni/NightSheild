import Pricing from '@/components/NightShield/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing - NightShield',
    description: 'Find the perfect plan for your venue. NightShield offers flexible pricing options to fit your security needs.',
};

export default function PricingPage() {
    return (
        <main className="bg-black text-white min-h-screen pt-24">
            <Pricing />
        </main>
    );
}
