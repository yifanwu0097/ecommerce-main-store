import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

interface BankDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
  loading: boolean;
}

export const BankDetailsModal: React.FC<BankDetailModalProps> = ({
  isOpen,
  onClose,
  onCheckout,
  loading,
}) => {
  return (
    <Modal
      title='Bank Details'
      description='Send your payments to following '
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='flex flex-col'>
        <p className='font-bold'>Ngân Hàng Quân Đôi MBBank</p>
        <p>
          <span className='font-bold'>STK: </span>0828030899
        </p>
        <p>
          <span className='font-bold'>Tên Tài Khoản: </span> Nguyễn Khắc Huy
        </p>
        <div className='flex gap-4 my-4'>
          <Button onClick={onCheckout} disabled={loading}>
            Payment Sent
          </Button>
          <Button variant={"outline"} onClick={onClose}>Cancel</Button>
          {/* <Button onClick={onCheckout}>Payment Sent</Button> */}
        </div>
      </div>
    </Modal>
  );
};
