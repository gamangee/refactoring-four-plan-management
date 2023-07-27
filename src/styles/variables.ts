const variables = {
  flex: (direction = "row", justify = "center", align = "center") => `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
    `,

  absoluteCenter: `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
};

export default variables;
