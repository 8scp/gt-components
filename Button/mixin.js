import { getCurrentInstance } from "vue";
export default function ClickBtn() {
  const instance = getCurrentInstance();
  const handleClick = () => {
    if (instance) {
      instance.emit("handleClickBtn");
    }
  };
  return {
    handleClick
  }
}
