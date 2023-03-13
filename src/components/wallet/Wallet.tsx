import Link from "next/link";
import { useListen } from "../../hooks/useListen";
import { useMetamask } from "../../hooks/useMetamask";
import { Loading } from "../Loading";

export default function Wallet() {
  const {
    dispatch,
    state: { status, isMetamaskInstalled, wallet },
  } = useMetamask();
  const listen = useListen();

  const showInstallMetamask =
    status !== "pageNotLoaded" && !isMetamaskInstalled;
  const showConnectButton =
    status !== "pageNotLoaded" && isMetamaskInstalled && !wallet;

  const isConnected = status !== "pageNotLoaded" && typeof wallet === "string";

  const handleConnect = async () => {
    dispatch({ type: "loading" });
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length > 0) {
      const balance = await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      dispatch({ type: "connect", wallet: accounts[0], balance });

      // we can register an event listener for changes to the users wallet
      listen();
    }
  };

  const handleDisconnect = () => {
    dispatch({ type: "disconnect" });
  };

  return (
    <>
      {showConnectButton && (
        <button
          onClick={handleConnect}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
          //   className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-ganache text-white px-5 py-3 text-base font-medium  sm:w-auto"
        >
          {status === "loading" ? <Loading /> : "Connect Wallet"}
        </button>
      )}

      {showInstallMetamask && (
        <Link
          href="https://metamask.io/"
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
        >
          Install Metamask
        </Link>
      )}

      {isConnected && (
        <button
          onClick={handleDisconnect}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
          //className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-ganache text-white px-5 py-3 text-base font-medium  sm:w-auto"
        >
          {wallet}
        </button>
      )}
    </>
  );
}
