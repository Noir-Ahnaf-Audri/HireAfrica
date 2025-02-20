using HireAfrica.ViewModels;
using Microsoft.Maui.Controls;

namespace HireAfrica.Pages
{
    public partial class JobBoard : ContentPage
    {
        public JobBoard()
        {
            InitializeComponent();

            // Set the BindingContext to an instance of JobBoardViewModel
            BindingContext = new JobBoardViewModel();
        }
    }
}