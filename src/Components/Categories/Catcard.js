import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";

function Catcard({ indx, category }) {
  return (
    <div key={indx} className="cat__card">
      <div className="card__body">
        <div data-text={category?.catname} className="card__image">
          <img src={category?.catimage} alt="card avt" />
        </div>
        <div className="card__footer available__rentals">
          <AvatarGroup
            isBordered
            max={3}
            total={category?.catitems?.length}
            renderCount={(count) => (
              <p className="text-small font-medium ms-2 text-white">
                +{count} others
              </p>
            )}
          >
            {category?.catitems?.length > 0
              ? category.catitems.map((catitm, itindx) => {
                  return <Avatar key={itindx} src={catitm} />;
                })
              : ""}
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}

export default Catcard;
