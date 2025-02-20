using Microsoft.Maui.Controls;
using System;

namespace HireAfrica.Pages
{
    public partial class Create : ContentPage
    {
        public Create()
        {
            InitializeComponent();
        }

        private async void SignUpButton_Clicked(object sender, EventArgs e)
        {
            bool isValid = true;

            // Validate email
            if (string.IsNullOrWhiteSpace(EmailEntry.Text))
            {
                EmailError.IsVisible = true;
                isValid = false;
            }
            else
            {
                EmailError.IsVisible = false;
            }

            // Validate password
            if (string.IsNullOrWhiteSpace(PasswordEntry.Text))
            {
                PasswordError.IsVisible = true;
                isValid = false;
            }
            else
            {
                PasswordError.IsVisible = false;
            }

            // Validate confirm password
            if (ConfirmPasswordEntry.Text != PasswordEntry.Text)
            {
                ConfirmPasswordError.IsVisible = true;
                isValid = false;
            }
            else
            {
                ConfirmPasswordError.IsVisible = false;
            }

            // Validate full name
            if (string.IsNullOrWhiteSpace(FullNameEntry.Text))
            {
                FullNameError.IsVisible = true;
                isValid = false;
            }
            else
            {
                FullNameError.IsVisible = false;
            }

            // Proceed to sign up if the data is valid
            if (isValid)
            {
                try
                {
                    // Dummy logic for user sign-up without Firebase (use local storage or a backend API)
                    var user = new { Email = EmailEntry.Text, Password = PasswordEntry.Text, FullName = FullNameEntry.Text };

                    // Simulate saving the user data (replace with actual logic for saving to a database or API)
                    // For example: SaveUserToDatabase(user);

                    await DisplayAlert("Success", "Account created successfully!", "OK");
                    await Navigation.PushAsync(new MainPage()); // Navigate to the main app after sign-up
                }
                catch (Exception ex)
                {
                    await DisplayAlert("Error", $"Account creation failed: {ex.Message}", "OK");
                }
            }
        }

        private async void SignInButton_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new SignIn()); // Navigate to Sign In Page
        }

        private void StudentBtn_Clicked(object sender, EventArgs e)
        {
            StudentBtn.BackgroundColor = Colors.Blue;
            StudentBtn.TextColor = Colors.White;
            EmployerBtn.BackgroundColor = Colors.LightGray;
            EmployerBtn.TextColor = Colors.Black;

            StudentFields.IsVisible = true;
            EmployerFields.IsVisible = false;
        }

        private void EmployerBtn_Clicked(object sender, EventArgs e)
        {
            EmployerBtn.BackgroundColor = Colors.Blue;
            EmployerBtn.TextColor = Colors.White;
            StudentBtn.BackgroundColor = Colors.LightGray;
            StudentBtn.TextColor = Colors.Black;

            StudentFields.IsVisible = false;
            EmployerFields.IsVisible = true;
        }

        private async void UploadResumebtn_Clicked(object sender, EventArgs e)
        {
            try
            {
                var fileResult = await FilePicker.PickAsync(new PickOptions
                {
                    PickerTitle = "Select a Resume (PDF)",
                    FileTypes = FilePickerFileType.Pdf
                });

                if (fileResult != null)
                {
                    await DisplayAlert("Success", $"Resume Uploaded: {fileResult.FileName}", "OK");
                }
            }
            catch (Exception ex)
            {
                await DisplayAlert("Error", "Failed to upload resume. Please try again.", "OK");
            }
        }
    }
}
