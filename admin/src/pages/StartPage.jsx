import React, { useEffect, useState } from "react";
import { Button, Flex, Modal, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { Toaster, toast } from "sonner";
import useStore from "../store";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

const StartPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const [visible, { toggle }] = useDisclosure(false);

  const { user, signInModal, setSignInModal } = useStore();

  const [opened, { open, close }] = useDisclosure(signInModal);
  const [isSignin, setIsSignin] = useState(true);
  const [formClose, setFormClose] = useState(false);

  const theme = colorScheme === "dark";

  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleCloseModal = () => {
    close();
    setSignInModal(!signInModal);
  };

  useEffect(() => {
    user?.token && navigate(from);
  }, [user]);

  return (
    <div
      className={clsx(
        "w-full h-screen px-0 md:px-4",
        theme
          ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#302943] via-slate-900 to-black"
          : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff] via-blue-50 to-white"
      )}
    >
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-center md:pt-24 md:gap-6 px-4">
        <div
          className="w-full 2xl:max-w-3xl flex flex-col items-center
         justify-center gap-y-10 2xl:-mt-20"
        >
          <span
            className={clsx(
              "hidden md:flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base",
              theme
                ? "border-gray-700 text-gray-400"
                : "border-gray-300 text-gray-600"
            )}
          >
            Unleash Your Words, and share with others{" "}
            <Link
              className={clsx(
                "flex gap-1 items-center font-semibold text-[18px]",
                theme ? "text-white" : "text-slate-700"
              )}
            >
              Join Now
              <MdArrowForward />
            </Link>
          </span>

          <h1
            className={clsx(
              "text-4xl 2xl:text-6xl font-bold text-center",
              theme ? "text-gray-400" : "text-slate-700"
            )}
          >
            Join Our Community of Passionate Writers!
          </h1>

          <span
            className={clsx(
              "text-center text-base md:text-[18px]",
              theme ? "text-gray-500" : "text-slate-600"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            sapiente at rerum pariatur. Vero, eos autem ut unde molestias
            dolorum reprehenderit itaque ipsam neque fugiat architecto eius modi
            totam ipsa laboriosam ad voluptates deleniti quia!
          </span>

          <div className="flex gap-6 items-center mt-6">
            <Button
              onClick={open}
              className={clsx(
                "text-white rounded h-10 text-sm",
                theme ? "bg-blue-600" : "bg-black"
              )}
            >
              Get Started
            </Button>
            <Link
              to="#"
              className={clsx(
                "flex gap-1 items-center font-semibold",
                theme ? "text-white" : "text-gray-600"
              )}
            >
              Contact
              <MdArrowForward />
            </Link>
          </div>
        </div>
      </div>

      <Modal
        opened={opened || signInModal}
        onClose={formClose ? () => {} : handleCloseModal}
        title="User Authentication"
        centered
      >
        {isSignin ? (
          <LoginForm
            isSignin={isSignin}
            setIsSignin={setSignInModal}
            toast={toast}
            setFormClose={setFormClose}
          />
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
};

export default StartPage;
