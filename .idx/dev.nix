{ pkgs, ... }: {
  # Let Nix manage packages for your environment
  packages = [
    pkgs.nodejs_20 # Provides node, npm, npx
  ];
  # Set environment variables
  env = {
    # Example:
    # GREET = "Hello, Nix!";
  };
  # Create a shell alias
  # shellAliases = {
  #   g = "git";
  # };
  # Run a command when the environment starts
  # startup.command = "echo 'Welcome to your new environment!'";

  # Configure the preview panel
  previews = [
    {
      # The name of the preview panel
      name = "web";
      # The command to run to start the preview server
      command = "npx http-server -p $PORT -c-1";
      # The port to expose on the preview panel
      port = 8080;
    }
  ];
}
