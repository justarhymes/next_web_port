type StringProps = {
  value: string
};

const pathCheck: React.FC<StringProps> = (path) => {
  if (path.value.length > '/projects/'.length) {
    return true;
  }
  return false;
}

export default pathCheck;
