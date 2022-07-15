// @ts-ignore
import React from "react";
import Admonition from "@theme/Admonition";

export default ({url}) => (
    <Admonition
        type="caution"
        title="Under Construction"
        icon="🚧"
    >
        This section of the documentation is not formalized and may change. <br />
        Help us by <a href={`https://github.com/Avdan-OS/docsite/tree/dev${url}`}>contributing to it</a> on our GitHub.
    </Admonition>
);