import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function FrequentlyItems() {

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div className="p-3">
      <Typography variant="h6" gutterBottom component="div">データ上で関連する情報</Typography>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="link" underline="hover" color="inherit" href="#">
            <Typography variant="subtitle2" gutterBottom component="p">身体構造</Typography>
          </Link>
          <Link className="link" underline="hover" color="inherit" href="#">
            <Typography variant="subtitle2" gutterBottom component="p">骨格形態</Typography>
          </Link>
          <Link className="link" underline="hover" color="inherit" href="#">
            <Typography variant="subtitle2" gutterBottom component="p">遺伝構造の制限</Typography>
          </Link>
          <Link className="link" underline="hover" color="inherit" href="#">
            <Typography variant="subtitle2" gutterBottom component="p">...</Typography>
          </Link>
            <Typography variant="subtitle2" gutterBottom component="p">Belts</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default FrequentlyItems;
