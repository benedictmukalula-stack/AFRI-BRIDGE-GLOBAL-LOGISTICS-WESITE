import { SiteLayout } from '@/components/SiteLayout';
import { PaymentPageClient } from './PaymentPageClient';

export function generateStaticParams() {
  return [{ registrationId: 'demo-registration' }];
}

export default function PaymentPage() {
  return (
    <SiteLayout>
      <PaymentPageClient />
    </SiteLayout>
  );
}
