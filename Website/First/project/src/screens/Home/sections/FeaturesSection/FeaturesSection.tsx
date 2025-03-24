import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full h-[116px] flex items-center justify-between px-16">
      <div className="flex items-center gap-6 bg-[#61e923] border border-solid border-black h-[50px] px-4">
        {/* Other Navigation Code */}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => navigate("/login")}
          className="bg-[#61e923] text-black border border-solid border-black rounded-none px-6 py-3 h-auto hover:bg-[#61e923] hover:text-black"
        >
          Login
        </Button>
      </div>
    </header>
  );
};
