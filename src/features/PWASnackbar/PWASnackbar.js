import { Button, Snackbar } from "@mui/material";
import { selectServiceWorkerStatus, serviceWorkerStatus } from "./serviceWorkerStatusSlice";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import useSx from "./useSx";

const { UPDATE_READY } = serviceWorkerStatus;

const PWASnackbar = () => {
  const status = useSelector(selectServiceWorkerStatus);
  const [open, setOpen] = useState(false);
  const sx = useSx();

  const TransitionProps = { mountOnEnter: true, unmountOnExit: true };

  const handleReload = () => {
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => setOpen(status === UPDATE_READY), [status]);

  return (
    <Snackbar
      sx={sx.root}
      TransitionProps={TransitionProps}
      open={open}
      message="New content is available and will be used after reloading."
      action={
        <Button onClick={handleReload}>
          reload
        </Button>
      }
    />
  );
};

PWASnackbar.whyDidYouRender = true;

export default PWASnackbar;