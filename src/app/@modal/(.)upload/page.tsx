import Modal from '@/components/common/Modal';
import ShortsUploader from '@/components/shorts/ShortsUploader';

export default function InterceptedUploadPage() {
  return (
    <Modal>
      <ShortsUploader isModal={true} />
    </Modal>
  );
}
