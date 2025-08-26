import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="https://file.notion.so/f/f/7e230680-dafc-816f-a623-0003873218eb/91f7344d-ae81-47f0-9089-b6f7345b8a4e/NIGHTSHIELD_(2).png?table=block&id=25b30680-dafc-81f5-a74b-c70bb918e405&spaceId=7e230680-dafc-816f-a623-0003873218eb&expirationTimestamp=1756339200000&signature=rRUDGAVfJsQ5Qn7Tyd_vWanSmDbNLFI-8t8MmVkvGEY&downloadName=LOGO+WHITE+BACKGROUND.png"
        alt="NightShield Logo"
        width={150}
        height={40}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
