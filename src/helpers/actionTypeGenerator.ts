const actionTypeGenerator = (actionName: string) => {
  return {
    loading: `${actionName}_REQUEST`,
    success: `${actionName}_SUCCESS`,
    error: `${actionName}_FAILED`,
    idle: `${actionName}_IDLE`,
    default: actionName,
  };
};

export default actionTypeGenerator;
