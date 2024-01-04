interface SystemRequiredProps {
  para: string;
}

const SystemRequired: React.FC<SystemRequiredProps> = ({ para }) => {
  return (
    <div>
      <p>- {para}</p>
    </div>
  );
};

export default SystemRequired;
