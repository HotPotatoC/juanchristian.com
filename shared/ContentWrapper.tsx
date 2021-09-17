import React from "react";

type ContentWrapperProps = {
  extraClass?: string;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  extraClass,
}) => <div className={`container mx-auto ${extraClass}`}>{children}</div>;

export default ContentWrapper;
